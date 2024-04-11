
export interface Env {
	
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if (request.method === "GET") {
			return Response.json({ message: "You sent a Get request!" });

		}

		else {
			return Response.json({ message: "You sent a Post request!" });
		}

	},
};
