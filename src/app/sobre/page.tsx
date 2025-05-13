import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Esse é a página sobre'
}


export default function SobrePage(){
    return (
        <main>
            <h2>Sobre Page</h2>
        </main>
    )
}