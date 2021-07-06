import {} from "apollo-server-express";

const getBooks = [
    {id: 1, name: "book1", price: 10, storeID: [1,2]},
    {id: 2, name: "book2", price: 10, storeID: [1,3]},
    {id: 3, name: "book3", price: 10, storeID: [1,2,3]}
]

const getStore = [
    {id: 1, name: "store1", address: "123"},
    {id: 2, name: "store2", address: "123"},
    {id: 3, name: "store3", address: "123"}

]

function books(): object[] {
    return getBooks;
}

function book(parent: any, args: any): object {
    return getBooks.find(element => element.id == args.id)
}

function store(parent: any, args: any): object[] {
    let result:object[] = []
    for (const element of parent.storeID){
        result.push(getStore.find(i => i.id == element))
    }
    return result
}

export const resolvers = {
    Query: {
        books,
        book
    },
    Book: {
        store
    }
};
