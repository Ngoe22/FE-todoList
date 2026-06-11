import { ReactNode } from "react";


interface Props {
    children : ReactNode;
    link  ?: string;
    round ?: boolean;
    color ?: string;
}


export default function Badge ( {  link , round ,children ,color}: Props ) {
    return (
        <span  className={"inline-block p-2 rounded-md ml-2 font-bold bg-(--badge-bg) text-(--badge-text) border border-(--badge-border) "}>
            {children}
        </span>
    ) ;
}