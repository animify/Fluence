import { spawn } from 'child_process';
import logger from '../../helpers/logger';

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

export default mongoServer;
