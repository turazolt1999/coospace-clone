import Link from "next/link"
import Image from 'next/image';

interface AvatarProps {
    size?: string;
}


export default function Avatar({ size }: AvatarProps) {
    let widthHeight = 'w-12 h-12';
    if (size === 'big') {
        widthHeight = 'w-36 h-36';
    }

    return (
        <Link href={'/profile'}>
            <span className="cursor-pointer">
                <div className={`${widthHeight} rounded-full overflow-auto border-4 transition-all hover:shadow-xl`}>
                    <Image
                        className="w-full h-full object-cover transition-all hover:brightness-90"
                        src='https://static.wikia.nocookie.net/suits/images/a/a2/Character-Portal_S8_Harvey_Specter.jpg/revision/latest/smart/width/386/height/259?cb=20180731202657'
                        width={600}
                        height={400}
                        alt="Test" />
                </div>
            </span>
        </Link>
    );
}