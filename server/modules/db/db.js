import { spawn } from 'child_process';
import mongoose from 'mongoose';
import logger from '../../helpers/logger';
import dbConfig from '../../configs/db.json';

const mongoServer = spawn('D:/MongoDB/bin/mongod.exe', ['--dbpath=D:/Github/Fluence/data', '--port', '27017'], {
    shell: true
});

mongoServer.stdout.on('data', (data) => {
    logger.info(data.toString('utf8'));
});

mongoServer.stderr.on('data', (data) => {
    logger.info(data.toString('utf8'));
});

mongoServer.on('close', (code) => {
    logger.error(`MongoDB server exited with code: ${code}`);
});


mongoose.connect(dbConfig.mongodb.uri);

const connection = mongoose.connection;

connection.on('error', (err) => {
    logger.error('Connection error:', err.message);
});

connection.once('open', () => {
    logger.info('Connected to MongoDB');
});

export default mongoServer;
