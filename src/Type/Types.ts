
export type User = {
    id: string,
    email: string,
    username: string,
    prenium: boolean,
}

export type Reservation = {
    id: string,
    product: string,
    quantity: number,
    price: number,
    clientName: string,
    clientPhone: string,
    valueMeter: string,
    shopId: string | undefined,
    status: string,
    date: string,
}

