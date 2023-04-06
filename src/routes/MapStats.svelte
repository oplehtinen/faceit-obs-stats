<script lang="ts">
    export let mapPicks : Array<string>;
    export let mapData : Array<Array<string>>;
    export let team1Logo : string;
    export let team2Logo : string;

    const findMap = (mapName: string) => {
        return mapData.find((map) => map.guid === mapName);
    }
    console.log(mapData);
</script>

{#each mapPicks as map}
<div class="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="{findMap(map).image_lg}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{findMap(map).name}!</h2>
      <div class="stats shadow">
  
        <div class="stat">
          <div class="stat-figure text-secondary">
              <div class="w-16 rounded-full">
                <img src="{team2Logo}" />
              </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-secondary">31 tasks remaining</div>
        </div>
        
      </div>
    </div>
  </div>
{/each}