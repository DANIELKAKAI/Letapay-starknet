
import { useAccount, useContractRead, useContractWrite, useContract } from "@starknet-react/core";

import abi from '../utils/letapay-abi.json';
import React, { useState, useMemo } from "react";

const contractAddress = "0x370e8d045fd18a8fe513e84fb14a6a49a559bc89a03e892efbe22ba264b4f7b";

function Owner() {
    const { data, isLoading, isError, isSuccess } = useContractRead({
        abi: abi,
        address: contractAddress,
        functionName: "get_owner",
        args: [],
        watch: true
    });

    return (
        <div>
            <h1>Info</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching owner information.</p>}
            {isSuccess && <p>Owner Address: {data?.toString()}</p>}
            {!isLoading && !isError && !isSuccess && <p>No data available.</p>}
        </div>
    );
}

function Blank() {
    return (
        <div>
        </div>
    );
}

export default function InfoBar() {
    const { address, isConnecting, isDisconnected } = useAccount();

    return address ? <Owner /> : <Blank />;
}

