module.exports = {
<<<<<<< Updated upstream
    show : async (req,res) => {

        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : 'Comuníquese con el administrador!'
            })
        }

        let response = {
            ok: true,
            meta : {
                total : req.session.cart.length
            },
            data : req.session.cart
        }

=======
    show: async (req, res) => {
        if (!req.session.cart) {
            return res.status(500).json({
                ok: false,
                msg: 'Comuniquese con el admin!',
            })
        }
        let response = {
            ok: true,
            meta: {
                total: req.session.cart.length
            },
            data: req.session.cart
        }
>>>>>>> Stashed changes
        return res.status(200).json(response)
    }
}