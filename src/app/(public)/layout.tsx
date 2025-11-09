import { Header } from "@/src/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren<unknown>) {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}