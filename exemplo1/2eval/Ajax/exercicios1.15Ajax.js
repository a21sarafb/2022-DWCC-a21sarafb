"use strict";
/* 4. Crea unha páxina web que mostre información dun Pokémon escollido de forma
aleatorio usando a PokéAPI. Para acceder á información dun Pokémon pode usarse
a URL https://pokeapi.co/api/v2/pokemon/{id or name}.
Cada vez que se cargue a páxina web, debe xerarse un número aleatorio entre 1 e
1000, que será o id do Pokémon a mostrar (hai 1010 exactamente, aínda que os
últimos aínda non teñen imaxe).
Unha vez obtido o id, consultarase a API para acceder a toda a información do
Pokémon.
Na páxina web debe mostrarase o nome do Pokémon, a imaxe que está
almacenada na propiedade sprites.other.home.front_default do obxecto resposta e
as habilidades.
Cada Pokémon ten varias habilidades. Deben mostrarse os nomes das habilidades e
engadir unha ligazón para consultala na API. Así por exemplo, o Pokémon con id = 1
ten a habilidade denominada overgrow.
Na ligazón de consulta da habilidade aparece o seu nome en diferentes idiomas.
Busca o nome en español e móstrao tamén na páxina web. */
