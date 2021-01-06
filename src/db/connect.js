import { connect } from 'mongoose';

const connectToDb = async (connectString) => {
    try {
        const connection = await connect(connectString, { useNewUrlParser: true,  useUnifiedTopology: true})
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb