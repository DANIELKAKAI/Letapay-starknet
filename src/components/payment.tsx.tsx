import { useAccount, useContractRead, useContractWrite, useContract } from "@starknet-react/core";
import abi from '../utils/letapay-abi.json';
import React, { useState, useMemo } from "react";
import { stark } from 'starknet';


const contractAddress = "0x370e8d045fd18a8fe513e84fb14a6a49a559bc89a03e892efbe22ba264b4f7b";

function AddPayment() {
    const [recieverAddress, setRecieverAddress] = useState("0x4aeb380faf2e45fa1c307c421a2726011f9d7a1f7e991b8a0486a3ffee3fe66");
    const [amount, setAmount] = useState<number | ''>(0);;
    const [paymentId, setPayment] = useState<number | ''>(0);;
    const { address } = useAccount();
    const [res, setRes] = useState();

    const { contract } = useContract({
        abi: abi,
        address: contractAddress,
    });

    const getPayment = () => {
        contract.get_payment(paymentId).then(res => {
            console.log(res);
            setRes(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const calls = useMemo(() => {
        const calldata = [
            paymentId,
            recieverAddress,
            amount
        ];

        return {
            contractAddress: contractAddress,
            entrypoint: "add_payment",
            calldata,
        };
    }, [paymentId, recieverAddress, amount]);

    const { write, isLoading, data } = useContractWrite({
        calls,
    });

    function execute() {
        // trigger the transaction
        write();
    }

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

    return (
        <>
            <label>Payment ID</label>
            <input value={paymentId} onChange={(e) => setPayment(e.target.value)} type="number"></input>

            <label>Receiver Address</label>
            <input value={recieverAddress} onChange={(e) => setRecieverAddress(e.target.value)} type="text"></input>

            <label>Amount</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number"></input>

            <button type="button" onClick={execute}>
                Add Payment
            </button>

            <button onClick={getPayment}> get payment</button>

            <p>{res}</p>
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