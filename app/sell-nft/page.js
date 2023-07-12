import Image from "next/image"
import Head from "next/head"
import { Metadata } from "next"

export const metadata = {
    title: "Sell NFT",
    description: "NFT selling page",
}

export default function sellNft() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            <h1>Sell NFT</h1>
        </main>
    )
}
