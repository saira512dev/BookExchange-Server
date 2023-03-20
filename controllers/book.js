import Book from "../models/Product.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();

        // const productsWithStats = await Promise.all(
        //     products.map(async (product) => {
        //         const stat = await ProductStat.find({
        //             productId: product._id
        //         })
        //     return {
        //         ...product._doc,
        //         stat
        //     }
        //     })
        //     )

            res.status(200).json(books)
    } catch( error ) {
        res.status(404).json({message: error})
    }
}
//Add search books
// export const getCustomers = async (req, res) => {
//     try {
//         const customers = await User.find({role: "user"}).select("-password");

//         res.status(200).json(customers)
//     } catch( error ) {
//         res.status(404).json({message: error})
//     }
// }

