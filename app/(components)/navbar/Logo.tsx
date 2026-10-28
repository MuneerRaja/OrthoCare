import Image from "next/image";

export function Logo() {
    return (
        <>
            <Image
                className=''
                src={'/svgs/OrthoCare-Logotype.svg'}
                width={200}
                height={41}
                alt='OrthoCare Logo'
            />
        </>
    )
}