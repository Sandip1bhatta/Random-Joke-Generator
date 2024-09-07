let jokes  = [`What did one hat say to the other?
You wait here. I’ll go on a head.`,`What do you call a magic dog?
A labracadabrador.`,`What did the shark say when he ate the clownfish?
This tastes a little funny.`,`What’s orange and sounds like a carrot?
A parrot.`,`Why can’t you hear a pterodactyl go to the bathroom?
Because the “P” is silent.`,`What do you call a woman with one leg?
Eileen.`,`What did the pirate say when he turned 80?
Aye matey.`,`Why did the frog take the bus to work today?
His car got toad away.`,`What did the buffalo say when his son left for college?
Bison.`,`What is an astronaut’s favorite part on a computer?
The space bar.`,`Why did the yogurt go to the art exhibition?
Because it was cultured.`,`What do you call an apology written in dots and dashes?
Re-Morse code.`,`Did you hear about the two people who stole a calendar?
They each got six months.`,`Why did the hipster burn his mouth?
He drank the coffee before it was cool`,`What do cows do on date night?
Go to the moo-vies.`,`What do cows say when they hear a bad joke?
“I am not amoosed.”`,`Why do French people eat snails?
They don’t like fast food.`,`Why did the golfer wear two pairs of pants? 
Just in case he got a hole in one!`,`Why don’t the circus lions eat the clowns? 
Because they taste funny!`,`How many tickles does it take to make an octopus laugh?
Ten-tickles.`,`What did 0 say to 8?
“Nice belt.”`,`What do you call a pig that does karate?
A pork chop.`,`What did the football coach say to the broken vending machine?
Give me my quarterback.`,`Why are elephants wrinkly?
Because you can’t iron them`,`What did the cake say to the fork?
You want a piece of me?`,`Why did the strawberry cry?
He found himself in a jam.`,`Why is it annoying to eat next to basketball players?
They dribble all the time.`,`What did the lettuce say to the celery?
Quit stalking me!`,`What do you call a train carrying bubblegum?
A chew-chew train.`,`What’s small and red and has a rough voice?
A hoarse radish!`,`Why do mushrooms get invited to all the parties?
Because they are such fungis.`,`Why shouldn’t you tell secrets in a cornfield?
Too many ears.`,`Why couldn’t the bad sailor learn the alphabet?
Because he always got lost at “C.”`,`How did the two cats end their fight?
They hissed and made up.`,`What’s the best thing about Switzerland?
I don’t know, but the flag is a big plus.`,`Why do we tell actors to “break a leg”?
Because every play has a cast.`,`Why don’t scientists trust atoms?
Because they make up everything.`,`Where are average things manufactured?
The satisfactory.`,`How do you drown a hipster?
Throw him in the mainstream.`,`What sits at the bottom of the sea and twitches?
A nervous wreck.`,`What does a nosy pepper do?
Gets jalapeño business!`,`How does Moses make tea?
He brews.`,`Why can’t you explain puns to kleptomaniacs?
They always take things literally.`,`How do you keep a bagel from getting away?
Put lox on it.`,`Why did the chicken go to the séance?
To get to the other side.`,`Did you hear about the mathematician who’s afraid of negative numbers?
He’ll stop at nothing to avoid them.`,`Did you hear about the actor who fell through the floorboards?
He was just going through a stage.`,`Did you hear about the claustrophobic astronaut?
He just needed a little space.`,`Why did the Oreo go to the dentist?
Because he lost his filling.`,`Where does Batman go to the bathroom?
The batroom.`,`Where does the sheep get his hair cut?
The baa-baa shop!`,`Why are ghosts such bad liars?
Because they are easy to see th'rough.`,`Why does Humpty Dumpty love autumn?
Because Humpty Dumpty had a great fa'll`,`How do trees get online?
They just log on!`,`What do you call a bear with no teeth?
A gummy bear.`,`Why couldn’t the leopard play hide-and-seek?
Because he was always spotted.`,`Why do bees have sticky hair?
Because they use honeycombs.`,`Where do fish sleep?
In the riverbed.`,`What do you call an alligator in a vest?
An investigator.`]

let randomIndex = Math.floor(Math.random() * jokes.length);


let jokeElement = document.querySelector('.joke');
jokeElement.innerHTML += jokes[randomIndex];