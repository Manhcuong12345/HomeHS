export {};

declare global {
    namespace Express {
        interface User {
            role: string;
            _id: string;
            name: string;
            email: string;
        }
        // interface Request {
        //       tasker:{  _id: string;
        //         name: string;
        //         email: string;
        //         role: string;
        //     };
        //     admin: {
        //         _id: string;
        //         name: string;
        //         email: string;
        //         role: string;
        //     };
    }
}
// }
