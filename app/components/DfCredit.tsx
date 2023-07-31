'use client'
import Link from 'next/link'
import Image from 'next/image'

const DfCredit = () => {
    return (
        <div className="bg-zinc-900">
            <Link href="http://www.davidfazaldin.com/" target="_blank" title="Made by dF">
                <Image
                            className="py-4 mx-auto invert opacity-20"
                            src="/df-logo2.png"
                            alt="Made By dF"
                            width={42}
                            height={42}
                            priority={true}
                         />
            </Link>
        </div>
    
    )

}

export default DfCredit;