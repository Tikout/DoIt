

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/mongoosetelephones";
mongoose.connect(url);


const telephoneSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    brand: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 24
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 32
    },
    color: {
        type: String,
        required: false,
        enum: ["red", "yellow", "green", "gold", "silver"]
    },
    age: {
        type: Number,
        required: false,
        default: 0,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: "Age can't be negative"
        }
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Telephone = mongoose.model("Telephone", telephoneSchema);


const telephone1 = new Telephone({
    _id: new mongoose.Types.ObjectId(),
    brand: "Nokia",
    name: "X1",
    color: "red",
    age: 1
});

const telephone2 = new Telephone({
    _id: new mongoose.Types.ObjectId(),
    brand: "Sony",
    name: "123",
    color: "green",
    age: 2
});

const telephone3 = new Telephone({
    _id: new mongoose.Types.ObjectId(),
    brand: "Lenovo",
    name: "X15672",
    color: "red",
    age: 3
});



async function main() { 

    try {

        await Telephone.deleteOne( { brand: "Nokia" } );
        await Telephone.deleteMany({});
         
        const telephone1Db = await telephone1.save();
        const telephoneArr = [telephone2, telephone3];

        await Telephone.insertMany(telephoneArr);

        const telephoneByBrand = await Telephone.findById(telephone1Db._id);
        console.log(telephoneByBrand);

        const telDb = await Telephone.findOne({
            brand: "Sony",
            name: "123"
        });
        console.log(telDb);


        const updatedTelDb = await Telephone.findOneAndUpdate({
            brand: "Sony",
            name: "123"
        }, {
            color: "yellow",
            age: 5
        }, {
            new: true
        });
        console.log(updatedTelDb);
        

    } catch (err) {
        console.error(err);       
    } finally {
        await mongoose.disconnect();
    }
}

main();