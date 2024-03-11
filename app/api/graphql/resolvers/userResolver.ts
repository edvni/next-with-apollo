import { UserInput, User, UserOutput } from '@/types/DBTypes';
import fetchData from '@/functions/fetchData';
import { UserResponse } from '@/types/MessageTypes';
import MyContext from '@/types/MyContext';

/*
const userResolver = {
    Mutation: {
        async register(_: any, { username, password }: { username: string, password: string }) {
            const user = new userModel({ username, password });
            await user.save();
            return user;
        },
    },
}; */
/*
const userResolver = {
    Mutation: {
        register: async (_parent: any, args: { UserInput: any; }) => {
            console.log('received input:', args.UserInput);

            const newUser = new User(args.UserInput);
            try {
                await newUser.save();
            return newUser;
            } catch (error) {
                console.error('Error registering user:', error);
                throw error;
            }
        }
    }
} */

const userResolver = {
    Query: {
        users: async () => {
            return await fetchData<UserOutput[]>(`${process.env.AUTH_URL}/users`);
        },
        userById: async (_: undefined, args: { id: string }) => {
            return await fetchData<UserResponse>(`${process.env.AUTH_URL}/users/${args.id}`);
        },
        checkToken: async (_: undefined, __: undefined, context: MyContext) => {
            return await {user: context.userdata?.user};
        }
    },
    Mutation: {
        register: async (_: undefined, args: { user: UserInput }) => {
            return await fetchData<UserResponse>(`${process.env.AUTH_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(args.user),
            });
        }
    }
};

/*
const userResolver = {
  Mutation: {
        register: async (_parent: any, args: { UserInput: any; }) => {
            console.log('Received data:', args.UserInput);
            const newUser = new User(args.UserInput);
            try {
                const savedUser = await newUser.save();
                console.log('Saved user:', savedUser);
                return savedUser;
            } catch (error) {
                console.error('Registration failed:', error);
                throw error; // Re-throw to propagate error to client
            }
        }
    }
}; */

export default userResolver;
