import { query } from "@/lib/db";

export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM users ORDER BY id DESC",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    const { name, email, type } = await request.json();
    const updateUsers = await query({
        query: "INSERT INTO users (name, email, type) VALUES (?, ?, ?)",
        values: [name, email, type],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const user = {
        name: name,
        email: email,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        product: user
    }));
}

export async function PUT(request) {

    const { id, name, email, type } = await request.json();
    const updateProducts = await query({
        query: "UPDATE users SET email = ?, name = ?, type = ? WHERE id = ?",
        values: [email, name, type, id],
    });
    const result = updateProducts.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const product = {
        id: id,
        email: email,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        product: product
    }));

}


export async function DELETE(request) {

    const { id } = await request.json();
    const deleteUser = await query({
        query: "DELETE FROM users WHERE id = ?",
        values: [id],
    });
    const result = deleteUser.affectedRows;
    let message = "";
    if (result) {
        message = "success";
    } else {
        message = "error";
    }
    const product = {
        id: id,
    };
    return new Response(JSON.stringify({
        message: message,
        status: 200,
        product: product
    }));

}