import Link from "next/link"

export default function Avatar({ size }: any) {
    let widthHeight = 'w-12 h-12';
    if (size === 'big') {
        widthHeight = 'w-36 h-36';
    }

    return (
        <Link href={'/profile'}>
            <span className="cursor-pointer">
                <div className={`${widthHeight} rounded-full overflow-auto border-4 transition-all hover:shadow-xl`}>
                    <img className="w-full h-full object-cover transition-all hover:brightness-90" src='https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/261715851_4953437544707282_6188890325207892602_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wlcjyfImyHEQ7kNvgFfVfrb&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=A7mGXlH-KrwgsBX4HZsxJyh&oh=00_AYD_pvEqvJb21xI0ZddoMkA1IJj4KJWmgGmeyOnhZJd6eg&oe=6791B28D' />
                </div>
            </span>
        </Link>
    );
}