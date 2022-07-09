import { useEffect, useState } from "react";

export default function OverflowText({text = '', length = 0}){
    return length > text.length ? text : text.split('').splice(0, Number(length)).join('') + ' ...';
}
export function MobileOverflowText({text, length}){
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if(window.innerWidth < 792){
            setMobile(true);
        }
        window.addEventListener('resize', (e) => {
            e.target.innerWidth < 792 ? setMobile(true) : setMobile(false);
        })
    }, [mobile])
    return mobile ? <OverflowText text={text} length={length} /> : text;
}