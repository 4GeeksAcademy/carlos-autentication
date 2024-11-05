import { toast } from "react-hot-toast";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			token: localStorage.getItem("token") || null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
				setStore({ user: null });
				toast.success("Logged out!");
			},

			login: async(email, password) => {
				const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
					})
				})
				const data = await resp.json();

				localStorage.setItem("token", data.token);

				setStore({ toke: data.token });
				setStore({ user: data.user });
				
				if (resp.ok){
					toast.success("Logged in!");
				} else {
					toast.error("You shall not pass!")
				}
			},

			
			register: async (email, fullName, password) => {
				const resp = await fetch (process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					header: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						full_name: fullName,
						password: password,
					})
				});

				console.log(resp)
				const data = await resp.json();

				localStorage.setItem("token", data.token);

				setStore({ user: data.user });
				setStore({ token: data.token });

				if(resp.ok) {
					toast.success("User registered")
				} else {
					toast.error("Error registering user")
				}
			},
			
			getUserLogged: async () => {
				const resp = await fetch (process.env.BACKEND_URL + "/api/user", {
					headers: {
						Authorization: "Bearer " + getStore().token
					}
				});
				if(resp.ok) {
					toast.success("User logged in! 🎉")
				} else {
					localStorage.removeItem("token");
					setStore({ token: null })
				}
				const data = await resp.json()
				setStore({ user: data })
			},


			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
