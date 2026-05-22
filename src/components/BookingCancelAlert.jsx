"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function BookingCancelAlert({ bookingId }) {
    const bookingCancelHandler = async () => {

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        });

        redirect('/my-bookings');
    }
    return (
        <AlertDialog>
            <AlertDialog.Trigger className="group flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-xs select-none hover:bg-surface-secondary">
                <Button> <TrashBin />Cancel</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger">
                                <TrashBin className="size-5" />
                            </AlertDialog.Icon>
                            <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to cancel this booking?
                                This action cannot be undone once confirmed.
                                Please make sure before proceeding.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={bookingCancelHandler} slot="close" variant="danger">
                                Proceed Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}