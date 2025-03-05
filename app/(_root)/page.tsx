import Link from "next/link";
import { RepairShopData } from "@/lib/consts";

export default function Home() {
  return (
    <div className="">
      <main className="h-[85dvh] flex flex-col justify-center items-center">
        <div className="">
          <h1 className="">{RepairShopData.name}</h1>
          <address>
            4, Abu Street, off 19th Street <br />
            Ugbowo, Benin City
          </address>

          <p>Open Daily: 9AM - 4PM</p>
          <Link href={`tel:${RepairShopData.phone}`}>
            {RepairShopData.phone}
          </Link>
        </div>
      </main>
    </div>
  );
}
