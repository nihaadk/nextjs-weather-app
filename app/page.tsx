import Image from "next/image";
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card";
import {WiDayRainWind} from "react-icons/wi";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-10">
            <div className="flex justify-between">
                <Card>
                    <CardContent>
                        <div className="flex justify-between p-5">
                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="text-8xl">25</h1>
                                <p>Feels like 22</p>
                                <div className="flex justify-between">
                                    <span>22 down</span>
                                    <span>22 up</span>
                                </div>
                            </div>


                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>

                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>

                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>

                            <div className="flex flex-col p-5 m-5 text-center ">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>

                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>

                            <div className="flex flex-col p-5 m-5 text-center">
                                <h1 className="mb-5 font-light text-xl">12:00 PM</h1>
                                <WiDayRainWind size={120}/>
                                <h1 className="mt-5 font-bold text-2xl">18*</h1>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
