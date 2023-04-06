<script lang="ts">
    export let team1 : string;
    export let team2 : string;
    export let team1Score : number;
    export let team2Score : number;
</script>

<div class="stats shadow absolute inset-x-10 top-5">
  
    <div class="stat place-items-center">
      <div class="stat-title">{team1}</div>
      <div class="stat-value">{team1Score}</div>
    </div>

    <div class="stat place-items-center">
        <div class="stat-title text-primary">Pappaliiga</div>
        <div class="stat-value text-primary">8. div</div>
      </div>
    
    <div class="stat place-items-center">
      <div class="stat-title text-secondary-content">{team2}</div>
      <div class="stat-value text-secondary-content">{team2Score}</div>
    </div>
    
  </div>