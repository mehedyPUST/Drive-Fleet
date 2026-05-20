
import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button, ButtonGroup } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const user = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const bookings = await res.json();

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl font-bold mb-5">My Bookings: {bookings.length}</h1>
            <div className="space-y-5">
                {bookings.map((booking) => (
                    <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">
                        <Image
                            src={booking.carImage}
                            alt={booking.carName}
                            height={200}
                            width={200}
                        />
                        <div>
                            <h1 className="font-bold text-2xl">{booking.carName}</h1>


                            <p>Booking Id: {booking._id}</p>

                            <p className="text-3xl font-bold text-cyan-500">
                                ${booking.rentalPrice}
                            </p>

                            <BookingCancelAlert bookingId={booking._id} />

                            {/* <BookingCancelAlert bookingId={booking._id} /> */}


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookingsPage;

