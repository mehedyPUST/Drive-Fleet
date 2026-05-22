"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteAlert({ car }) {
    const { _id, carName } = car;

    const handleDelete = async () => {
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car/${_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        });

        redirect('/my-added-cars');
    }

    return (
        <AlertDialog>
             <AlertDialog.Trigger className="group flex items-center gap-2 rounded-xl bg-surface p-1 shadow-xs select-none hover:bg-surface-secondary">
                <Button variant="outline" className="rounded-xl bg-surface hover:bg-surface-secondary shadow-xs">
                    <TrashBin /> Delete Item
                </Button>
                
            </AlertDialog.Trigger>



            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger">
                                <TrashBin className="size-5" />
                            </AlertDialog.Icon>
                            <AlertDialog.Heading>Delete {carName}?</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This action cannot be undone. This will permanently delete the car
                                and remove all associated data from the system.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Item
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
