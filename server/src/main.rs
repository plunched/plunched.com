#![feature(proc_macro_hygiene, decl_macro)]

use rocket::*;

#[get("/")]
fn index() -> String {
    format!("Hello, world!")
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index, ])
        .launch();
}
