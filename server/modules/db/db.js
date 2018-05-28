import { spawn } from 'child_process';

const mongoServer = spawn('D:/MongoDB/bin/mongod.exe', ['--dbpath=D:/Github/Fluence/data', '--port', '27017'], {
    shell: true
});

mongoServer.stdout.on('data', (data) => {
    console.log(data.toString('utf8'));
});

mongoServer.stderr.on('data', (data) => {
    console.log(data.toString('utf8'));
});

mongoServer.on('close', (code) => {
    console.log(`MongoDB server exited with code: ${code}`);
});

export default mongoServer;
