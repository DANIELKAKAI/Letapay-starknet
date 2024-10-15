import { useAccount, useContractRead, useContractWrite, useContract } from "@starknet-react/core";
import abi from '../utils/letapay-abi.json';
import { contractAddress } from '../utils/settings';
import React, { useState, useMemo } from "react";

import { Contract, Account, RpcProvider, cairo } from 'starknet';



function AddPayment() {
    const [receiverAddress, setReceiverAddress] = useState("0x4aeb380faf2e45fa1c307c421a2726011f9d7a1f7e991b8a0486a3ffee3fe66");
    const [amount, setAmount] = useState(0);
    const [paymentId, setPayment] = useState(0);
    const [res, setRes] = useState<any>(null);

    const acc_address = "0x22143db9e8a13fe27381b252b7de208f4be7ba8114d2971cd2b2b6879dd7bc9";
    const private_key = "0x0000000000000000000000000000000034a70ca0e1935ed9fb08b3705a692c76";

    /*
    const { contract } = useContract({
        abi: abi,
        address: contractAddress,
        account: ""
    });
    */

    const provider = new RpcProvider({
        nodeUrl: "http://localhost:5050/rpc"
    });
    const account = new Account(provider, acc_address, private_key, "1");
    let contract = new Contract(abi, contractAddress, account);

    contract.connect(account);

    const getPayment = () => {
        contract.get_payment(paymentId).then(res => {
            console.log(res);
            setRes(res);
        }).catch(err => {
            console.log(err);
            console.log("Not found");
        })
    }

    const makeInteraction = () => {
        const myCall = contract.populate('add_payment', [paymentId, receiverAddress, amount])

        contract.add_payment(myCall.calldata).then((res: any) => {
            console.info("Successful Response:", res)
        }).catch((err: any) => {
            console.error("Error: ", err)
        }).finally(() => {
            console.log("done")
        })
    }

    async function makePayment() {
        try {
            const myCall = contract.populate("add_payment", [
                paymentId, receiverAddress, amount
            ]);

            const res = await contract.add_payment(myCall.calldata);
            const tx_receipt = await provider.waitForTransaction(res.transaction_hash);
            console.log("res", res);
        } catch (error) {
            console.error("Error making payment:", error);
        }
    }

    /*
    const calls = useMemo(() => {
        const amountAsUint256 = BigInt(amount);

        const paymentIdAsUint256 = BigInt(paymentId);

        return contract.populateTransaction["add_payment"](paymentIdAsUint256, receiverAddress, amountAsUint256);
    }, [paymentId, receiverAddress, amount]);

    const { write, isPending, data } = useContractWrite({ calls });

    const execute = async () => {
        try {
            await write();
        } catch (err) {
            console.error(err);

        }
    };
    */

    /*
    const calls = useMemo(() => {
        if (!address || !contract) return [];
        return [contract.populate("add_payment", [paymentId, recieverAddress, amount])];
    }, [contract, paymentId, recieverAddress, amount]);

    const { write } = useContractWrite({
        calls,
    });

    function execute() {
        write();
    }
    */

    const addPaymentCalls = useMemo(() => {
        const amountAsUint256 = BigInt(amount);

        const paymentIdAsUint256 = BigInt(paymentId);

        return contract.populateTransaction["add_payment"](paymentIdAsUint256, receiverAddress, amountAsUint256);
    }, [paymentId, receiverAddress, amount]);

    const { writeAsync: write } = useContractWrite({ calls: addPaymentCalls });

    const execute = async () => {
        try {
            const { transaction_hash } = await write();
            console.log(transaction_hash);
        } catch (err) {
            console.error(err);
        }
    };

    const stringifyWithBigInt = (obj: any) => {
        return JSON.stringify(obj, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value,
            2
        );
    };

    return (
        <>
            <label>Payment ID</label>
            <input value={paymentId} onChange={(e) => setPayment(e.target.value)} type="number"></input>

            <label>Receiver Address</label>
            <input value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} type="text"></input>

            <label>Amount</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number"></input>

            <button type="button" onClick={execute}>
                Add Payment
            </button>

            <button onClick={getPayment}> get payment</button>

            <p>{res ? stringifyWithBigInt(res) : ''}</p>
        </>
    )
}

function Blank() {
    return (
        <div>
        </div>
    );
}

export default function Payment() {
    const { address, isConnecting, isDisconnected } = useAccount();

    return address ? <AddPayment /> : <Blank />;
}