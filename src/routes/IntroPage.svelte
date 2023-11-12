<script lang="ts">
	export let organizerData: any;
	export let status: string;
	organizerData.division =
		organizerData.division.split(' ')[0] + '. ' + organizerData.division.split(' ')[1];
</script>

<div class="flex w-full">
	<div class="card w-full bg-black bg-opacity-80 mt-0 text-neutral-content">
		<div class="card-body items-center flex flex-row justify-between text-center text-primary">
			<div class="w-2/5 text-center">
				<span class="font-light text-4xl">{organizerData.name + ' '}</span>
				<span class="text-4xl">{organizerData.division}</span>
			</div>
			<div class=" shrink">
				<button class="btn gap-2 text-lg"
					>Lähetys {status == 'SCHEDULED' ? 'alkaa' : 'jatkuu'} pian</button
				>
			</div>

			<div class="flex justify-between w-2/5">
				<h2 class="card-title font-light text-4xl text-white mr-4">Studiossa</h2>
				<div class="chat chat-start">
					<div class="chat-image avatar">
						<div class="w-16 mask mask-squircle">
							<img
								src="https://avatars.akamai.steamstatic.com/4dc223e1d89845adc23a4562a3bcade0d59c3637_full.jpg"
							/>
						</div>
					</div>
					<div class="chat-bubble w-48 h-8 text-white">Düfus Paelli</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-image avatar">
						<div class="w-16 mask mask-squircle">
							<img
								src="https://avatars.akamai.steamstatic.com/d31ba0642c279bc91a9b76275f7fac0317406fc7_full.jpg"
							/>
						</div>
					</div>
					<div class="chat-bubble w-48 h-8 text-white">Pekonikostaja</div>
				</div>
			</div>
		</div>
	</div>
</div>
