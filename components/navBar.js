import Link from "next/link";

export default function createBar() {
    return(
        <div>
            <a>
                <Link href="/">Home</Link>
            </a>
            <a>
                <Link href='/posts/first-post'>first one</Link>
            </a>
        </div>
    );
}

