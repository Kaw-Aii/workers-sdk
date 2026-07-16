/**
 * 🐸 Welcome to Frogbot's Home! 🐸
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see frogbot in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const frogGreetings = [
	'🐸 Ribbit! Welcome to my lily pad!',
	'🐸 *happy frog noises* Croak croak!',
	'🐸 Hoppy to see you here!',
	'🐸 Ribbit ribbit! Come catch some flies with me!',
	'🐸 *splashes in pond* Oh hey there, friend!',
];

const frogFacts = [
	'🪷 Did you know? Frogs can jump over 20 times their body length!',
	'🪷 Fun fact: A group of frogs is called an army!',
	'🪷 Frogs absorb water through their skin - they never drink!',
	'🪷 Some frogs can freeze solid in winter and thaw back to life in spring!',
	'🪷 The golden poison frog has enough toxin to kill 10 grown humans!',
];

function getRandomItem<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const greeting = getRandomItem(frogGreetings);
		const fact = getRandomItem(frogFacts);

		const funResponse = `
${greeting}

${fact}

    @..@
   (----)
  ( >__< )
  ^^ ~~ ^^
   ribbit!
		`.trim();

		return new Response(funResponse, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'X-Frog-Mood': 'hoppy',
			},
		});
	},
} satisfies ExportedHandler<Env>;
