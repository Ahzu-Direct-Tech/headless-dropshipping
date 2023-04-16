import Image from "next/image";

export default function Section1() {
  return (
    <div className="container-fluid bg-slate-400 py-12 h-auto">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row">
            <div className="w-auto md:w-1/2 text-4xl font-semibold font-serif">
                SHOP | AHZU DIRECT TECH LLC
                <div className="text-lg">
                    The information will be going here.
                </div>
            </div>
            <div className="w-auto md:w-1/2">
                <Image src={"https://www.ahzudirecttech.com/adt-logo.svg"} alt={`Logo`} width={200} height={200} />

            
            </div>
        </div>
        </div>
      
    </div>
  );
}
