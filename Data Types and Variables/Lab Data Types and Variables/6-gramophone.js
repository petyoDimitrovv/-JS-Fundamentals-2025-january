function solve(albumName, bandName, songName){

    const durInSec = ((albumName.length * bandName.length) * songName.length /2)/2.5 ;

    console.log(`The plate was rotated ${Math.ceil(durInSec)} times.`);

    

}

solve('Black Sabbath', 'Paranoid', 'War Pigs')