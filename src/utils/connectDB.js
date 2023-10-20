const mongoose = require(`mongoose`);
const kleur = require(`kleur`);
const { mongoConnectionString } = require(`./exportEnv`);

const connectDB = async () => {
    try {
        await mongoose.connect(mongoConnectionString);
        console.log(kleur.bgGreen().white(`MongoDB Connected`));
    } catch (error) {
        console.log(kleur.bgRed().white(`MongoDB Connection Failed`));
        console.log(kleur.bgRed().white(error.message));
    }
};

module.exports = connectDB;
