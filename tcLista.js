var detCarta = ["0nomeIngles","1nomePort","2catCarta","3lvl","4tipoCarta","5textoCarta","6valoresCarta","7caminhoImagem","8caminhoImagemPT"];
var isVersaoBr = false;

function setCard() {
  document.getElementById("nmCarta").innerHTML = detCarta[0] + " / " + detCarta[1];
  document.getElementById("catCarta").innerHTML = detCarta[2];
  document.getElementById("lvlCarta").innerHTML = detCarta[3];
  document.getElementById("tipoCarta").innerHTML = detCarta[4];
  document.getElementById("TextoCarta").innerHTML = detCarta[5];
  document.getElementById("ValCarta").innerHTML = detCarta[6];
  document.getElementById("imgCarta").src = detCarta[7];
  document.getElementById("mVersao").disabled = false;
  isVersaoBr = false;
}

document.getElementById("mVersao").onclick=function() {
  imgVar = document.getElementById("imgCarta");
  if (isVersaoBr) {
    imgVar.src = detCarta[7];
  }else {
    imgVar.src = detCarta[8];
  }
  isVersaoBr = !isVersaoBr
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


document.getElementById("alexandriteDragon").onclick=function() {
  detCarta[0] = "Alexandrite Dragon";
  detCarta[1] = "Drag\u00e3o de Alexandrita";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Drag\u00e3o";
  detCarta[3] = "♦ " + "N\u00edvel: 4 estrelas";
  detCarta[5] = "♦ " + "Muitas das joias perdidas dos czares podem ser encontradas nas escamas desse precioso dragão. Seu criadores continuam um mistério, assim como a forma como eles adquiriram os tesouros imperiais. Mas quem quer que encontre esse dragão terá encontrado o pote de ouro… sabendo disso ou não.";
  detCarta[6] = "♦ " + "atk/2000      def/100";
  detCarta[7] = "cartasImg/kaiba-eua/alexandriteDragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/dragaoDeAlexandrita.jpg";
  setCard();
}
document.getElementById("aquaMadoor").onclick=function() {
  detCarta[0] = "Aqua Madoor";
  detCarta[1] = "Aqua Madoor";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Mago";
  detCarta[3] = "♦ " + "N\u00edvel: 4 estrelas";
  detCarta[5] = "♦ " + "Um mago das águas que cria uma barreira líquida para esmagar todos aqueles que se opuserem a ele.";
  detCarta[6] = "♦ " + "atk/1200      def/2000";
  detCarta[7] = "cartasImg/kaiba-eua/aquaMadoor-ENG.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/aquaMadoor-BRA.jpg";
  setCard();
}
document.getElementById("battleOx").onclick=function() {
  detCarta[0] = "Battle Ox";
  detCarta[1] = "Touro Guerreiro";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Besta-Guerreira";
  detCarta[3] = "♦ " + "N\u00edvel: 4 estrelas";
  detCarta[5] = "♦ " + "Um monstro com tremendo poder que destrói seus inimigos com um único golpe do seu machado.";
  detCarta[6] = "♦ " + "atk/1750      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/battleOx.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/touroGuerreiro.jpg";
  setCard();
}
document.getElementById("bladeKnight").onclick=function() {
  detCarta[0] = "Blade Knight";
  detCarta[1] = "Cavaleiro da Lâmina";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Guerreiro/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: Enquanto você tiver 1 ou menos cards na sua mão, este card ganha 400 de ATK. Se você não controlar nenhum outro monstro, negue os efeitos dos Monstros de Efeito de Virar destruídos em batalhas com este card.";
  detCarta[6] = "♦ " + "atk/1600      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/bladeKnight.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/cavaleiroDaLamina.jpg";
  setCard();
}
document.getElementById("blueEyesWhiteDragon").onclick=function() {
  detCarta[0] = "Blue Eyes White Dragon";
  detCarta[1] = "Drag\u00e3o branco de Olhos Azuis";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Drag\u00e3o/Normal";
  detCarta[3] = "♦ " + "N\u00edvel: 8 estrelas";
  detCarta[5] = "♦ " + "Este drag\u00e3o lend\u00e1rio \u00e9 uma poderosa m\u00e1quina de destrui\u00e7\u00e3o. Praticamente invenc\u00edvel, muito poucos enfrentaram esta magn\u00edfica criatura e viveram para contar a hist\u00f3ria.";
  detCarta[6] = "♦ " + "atk/3000      def/2500";
  detCarta[7] = "cartasImg/kaiba-eua/blueEyesWhiteDragon.jpg";
  detCarta[8] = "D:\\Coding\\Web\\TraducaoCartas\\cartasImg\\kaiba-bra\\dragaoBrancodeOlhosAzuisAlt.jpg";
  // alert(detCarta[0] + "\n" + detCarta[1] + "\n" + detCarta[2] + "\n" + detCarta[3] + "\n" + detCarta[4] + "\n" + detCarta[5] + "\n" + detCarta[6] + "\n" + detCarta[7] );
  //window.location.replace("tcDetalhe.html");
  //window.open("tcDetalhe.html", '_blank').focus();
  setCard();
}
document.getElementById("chaosNecromancer").onclick=function() {
  detCarta[0] = "Chaos Necromancer";
  detCarta[1] = "Necromante do Caos";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Demônio/Efeito";
  detCarta[3] = "♦ " + "Nível: 1 estrela";
  detCarta[5] = "♦ " + "Efeito: O ATK deste card é igual ao número de Cards de Monstro no seu Cemitério x 300.";
  detCarta[6] = "♦ " + "atk/0      def/0";
  detCarta[7] = "cartasImg/kaiba-eua/chaosNecromancer.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/necromanteDoCaos.jpg";
  setCard();
}
document.getElementById("cyberneticCyclopean").onclick=function() {
  detCarta[0] = "Cybernetic Cyclopean";
  detCarta[1] = "Ciclope Cibernético";
  detCarta[2] = "♦ " + "Carta de Monstro Efeito";
  detCarta[4] = "♦ " + "Besta-Guerreira/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: Enquanto você não tiver cards na sua mão, este card ganha 1000 de ATK.";
  detCarta[6] = "♦ " + "atk/1400      def/200";
  detCarta[7] = "cartasImg/kaiba-eua/cyberneticCyclopean.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/ciclopeCibernetico.jpg";
  setCard();
}
document.getElementById("desFeralImp").onclick=function() {
  detCarta[0] = "Des Feral Imp";
  detCarta[1] = "Demônio Des Feral";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Réptil/Virar/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: VIRE: Escolha 1 card no seu Cemitério; embaralhe o alvo no Deck.";
  detCarta[6] = "♦ " + "atk/1600      def/1800";
  detCarta[7] = "cartasImg/kaiba-eua/desFeralImp.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/demonioDesFeral.jpg";
  setCard();
}
document.getElementById("desMosquito").onclick=function() {
  detCarta[0] = "Des Mosquito";
  detCarta[1] = "Des Mosquito";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Inseto/Efeito";
  detCarta[3] = "♦ " + "Nível: 3 estrelas";
  detCarta[5] = "♦ " + "Efeito: Quando este card for Invocado por Invocação-Normal ou Especial: coloque 2 marcadores sobre ele. Ele ganha 500 de ATK para cada um desses marcadores. Se este card seria destruído em batalha, em vez disso, remova 1 desses marcadores.";
  detCarta[6] = "♦ " + "atk/500      def/500";
  detCarta[7] = "cartasImg/kaiba-eua/desMosquito.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/desMosquito-BRA.jpg";
  setCard();
}
document.getElementById("divineDragonApocralyph").onclick=function() {
  detCarta[0] = "Divine Dragon Apocralyph";
  detCarta[1] = "Dragão Divino Apocralyph";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: Uma vez por turno: você pode descartar 1 card e, depois, escolher 1 monstro do Tipo Dragão no seu Cemitério; adicione o alvo à sua mão.";
  detCarta[6] = "♦ " + "atk/1000      def/1500";
  detCarta[7] = "cartasImg/kaiba-eua/divineDragonApocralyph.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/dragaoDivinoApocralyph.jpg";
  setCard();
}
document.getElementById("horusTheBlackFlameDragonLV4").onclick=function() {
  detCarta[0] = "Horus the Black Flame Dragon LV4";
  detCarta[1] = "Horus o Dragão da Chama Negra LV4";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrlas";
  detCarta[5] = "♦ " + "Efeito: O controle deste card com a face para cima não pode ser trocado. Durante a Fase Final, se este card destruiu um monstro em batalha neste turno: você pode enviar este card com a face para cima para o Cemitério; Invoque por Invocação-Especial 1 \"Horus, o Dragão da Chama Negra LV6\" da sua mão ou Deck.";
  detCarta[6] = "♦ " + "atk/1600      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/horusTheBlackFlameDragonLV4.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/horusODragaoDaChamaNegraLV4.jpg";
  setCard();
}
document.getElementById("horusTheBlackFlameDragonLV6").onclick=function() {
  detCarta[0] = "Horus the Black Flame Dragon LV6";
  detCarta[1] = "Horus o Dragão da Chama Negra LV6";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 6 estrelas";
  detCarta[5] = "♦ " + "Efeito: Este card não é afetado pelos efeitos de Cards de Magia. Durante a Fase Final, se este card destruiu um monstro em batalha neste turno: você pode enviar este card com a face para cima para o Cemitério; Invoque por Invocação-Especial 1 \"Horus, o Dragão da Chama Negra LV8\" da sua mão ou Deck.";
  detCarta[6] = "♦ " + "atk/2300      def/1600";
  detCarta[7] = "cartasImg/kaiba-eua/horusTheBlackFlameDragonLV6.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/horusODragaoDaChamaNegraLV6.jpg";
  setCard();
}
document.getElementById("interplanetarypurplythornyDragon").onclick=function() {
  detCarta[0] = "Interplanetarypurplythorny Dragon";
  detCarta[1] = "Dragão Interplanetariopurpuraespinhoso";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 5 estrelas";
  detCarta[5] = "♦ " + "Efeito: Se um monstro que você controla for destruído em batalha ou por um efeito de card e enviado para o Cemitério: você pode Invocar este card por Invocação-Especial da sua mão.";
  detCarta[6] = "♦ " + "atk/2200      def/1100";
  detCarta[7] = "cartasImg/kaiba-eua/interplanetarypurplythornyDragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/dragaoInterplanetariopurpuraespinhoso.jpg";
  setCard();
}
document.getElementById("kaiserSeaHorse").onclick=function() {
  detCarta[0] = "Kaiser Sea Horse";
  detCarta[1] = "Cavalo-marinho de Kaiser";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Erpente Marinha/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: Este card pode ser considerado como 2 Tributos para a Invocação-Tributo de um monstro de LUZ.";
  detCarta[6] = "♦ " + "atk/1700      def/1650";
  detCarta[7] = "cartasImg/kaiba-eua/kaiserSeaHorse.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/cavaloMarinhoDeKaiser.jpg";
  setCard();
}
document.getElementById("laJinnTheMysticalGenieOfTheLamp").onclick=function() {
  detCarta[0] = "La Jinn the Mystical Genie of the Lamp";
  detCarta[1] = "La Jinn, o Gênio Místico da Lâmpada";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Demônio";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Um gênio da lâmpada que está sempre à disposição do seu mestre.";
  detCarta[6] = "♦ " + "atk/1800      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/laJinnTheMysticalGenieOfTheLamp.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/laJinnOGenioMisticoDaLampada.jpg";
  setCard();
}
document.getElementById("lusterDragon").onclick=function() {
  detCarta[0] = "Luster Dragon";
  detCarta[1] = "Dragão do Brilho";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Dragão";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Este dragão alimenta-se de esmeraldas. Encantados por este monstro mesmo quando atacados, poucas pessoas vivem para contar a sua beleza.";
  detCarta[6] = "♦ " + "atk/1900      def/1600";
  detCarta[7] = "cartasImg/kaiba-eua/lusterDragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/dragaoDoBrilho.jpg";
  setCard();
}
document.getElementById("madDogOfDarkness").onclick=function() {
  detCarta[0] = "Mad Dog of Darkness";
  detCarta[1] = "Cão Doido das Trevas";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Besta";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Ele costumava ser um cão normal que brincava num parque, mas foi corrompido pelo poder das trevas.";
  detCarta[6] = "♦ " + "atk/1900      def/1400";
  detCarta[7] = "cartasImg/kaiba-eua/madDogOfDarkness.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/caoDoidoDasTrevas.jpg";
  setCard();
}
document.getElementById("optclops").onclick=function() {
  detCarta[0] = "Optclops";
  detCarta[1] = "Opticlope";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Demônio";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Um gigante com um só olho que serve o \"Governante Sombrio Ha Des\". Ele empala os seus inimigos com um chifre afiado, partindo-os em pedaços.";
  detCarta[6] = "♦ " + "atk/1800      def/1700";
  detCarta[7] = "cartasImg/kaiba-eua/optclops.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/opticlope.jpg";
  setCard();
}
document.getElementById("puppetPlant").onclick=function() {
  detCarta[0] = "Puppet Plant";
  detCarta[1] = "Planta Marionete";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Planta/Efeito";
  detCarta[3] = "♦ " + "Nível: 3 estrelas";
  detCarta[5] = "♦ " + "Efeito: Você pode descartar este card para o Cemitério e, depois, escolher 1 monstro do Tipo Guerreiro ou Mago que seu oponente controla; até a Fase Final, tome o controle do alvo.";
  detCarta[6] = "♦ " + "atk/1000      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/puppetPlant.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/plantaMarionete.jpg";
  setCard();
}
document.getElementById("theDragonDwellingInTheCave").onclick=function() {
  detCarta[0] = "The Dragon Dwelling in the Cave";
  detCarta[1] = "O Dragão vivendo na Caverna";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Dragão";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Um enorme dragão vive em uma caverna. Quando ele fica nervoso, a situação fica terrível, embora ele normalmente seja quieto. Dizem que ele guarda alguns tesouros.";
  detCarta[6] = "♦ " + "atk/1300      def/2000";
  detCarta[7] = "cartasImg/kaiba-eua/theDragonDwellingInTheCave.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/oDragaoVivendoNaCaverna.jpg";
  setCard();
}
document.getElementById("tigerDragon").onclick=function() {
  detCarta[0] = "Tiger Dragon";
  detCarta[1] = "Dragão Tigre";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 6 estrelas";
  detCarta[5] = "♦ " + "Efeito: Quando este card for Invocado por Invocação-Tributo pelo Tributo de um monstro do Tipo Dragão: você pode escolher até 2 Cards de Magia/Armadilha com a face para baixo que seu oponente controla; destrua os alvos.";
  detCarta[6] = "♦ " + "atk/#      def/#";
  detCarta[7] = "cartasImg/kaiba-eua/tigerDragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/dragaoTigre.jpg";
  setCard();
}
document.getElementById("twinHeadedBehemoth").onclick=function() {
  detCarta[0] = "Twin Headed Behemoth";
  detCarta[1] = "Behemoth de Duas Cabeças";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 3 estrelas";
  detCarta[5] = "♦ " + "Efeito: Durante a Fase Final, se este card estiver no Cemitério porque foi destruído no campo e enviado para lá neste turno: você pode Invocar este card por Invocação-Especial, mas seu ATK e DEF se tornam 1000. Você só pode usar este efeito de \"Behemoth de Duas Cabeças\" uma vez por Duelo.";
  detCarta[6] = "♦ " + "atk/1500      def/1200";
  detCarta[7] = "cartasImg/kaiba-eua/twinHeadedBehemoth.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/behemothDeDuasCabecas.jpg";
  setCard();
}
document.getElementById("vanguardOfTheDragon").onclick=function() {
  detCarta[0] = "Vanguard of the Dragon";
  detCarta[1] = "Vanguarda do Dragão";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Dragão/Efeito";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Efeito: Você pode enviar 2 monstros do Tipo Dragão da sua mão para o Cemitério; este card ganha 300 de ATK. Quando este card que você controla for enviado para o seu Cemitério por um efeito de card do oponente: você pode escolher 1 Monstro Normal do Tipo Dragão no Cemitério de qualquer duelista; Invoque o alvo por Invocação-Especial.";
  detCarta[6] = "♦ " + "atk/1700      def/1300";
  detCarta[7] = "cartasImg/kaiba-eua/vanguardOfTheDragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/vanguarDoDragao.jpg";
  setCard();
}
document.getElementById("vorseRaider").onclick=function() {
  detCarta[0] = "Vorse Raider";
  detCarta[1] = "Ginete Vorse";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Besta-Guerreira";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Esta perversa Besta-Guerreira faz todo tipo de coisas terríveis inimagináveis e adora fazê-las! O seu machado carrega as marcas das suas incontáveis vítimas.";
  detCarta[6] = "♦ " + "atk/1900      def/1200";
  detCarta[7] = "cartasImg/kaiba-eua/vorseRaider.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/gineteVorse.jpg";
  setCard();
}
document.getElementById("wattaildragon").onclick=function() {
  detCarta[0] = "Wattaildragon";
  detCarta[1] = "Wattaildragão";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Dragão";
  detCarta[3] = "♦ " + "Nível: 6 estrelas";
  detCarta[5] = "♦ " + "Capaz de lutar indefinidamente. Ele ataca ao envolver seu corpo em eletricidade e disparando contra seu oponente.IMPORTANTE: Capturar um \"Wattaildragão\" é proibido por Leis Antigas e é considerado uma ofensa de Nível 6, cuja pena mínima é o encarceramento por não menos que 2500 heliociclos.";
  detCarta[6] = "♦ " + "atk/2500      def/1000";
  detCarta[7] = "cartasImg/kaiba-eua/wattaildragon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/wattaildragao.jpg";
  setCard();
}
document.getElementById("xHeadCannon").onclick=function() {
  detCarta[0] = "X Head Cannon";
  detCarta[1] = "Cabeça de Canhão X";
  detCarta[2] = "♦ " + "Carta de Monstro Normal";
  detCarta[4] = "♦ " + "Máquina";
  detCarta[3] = "♦ " + "Nível: 4 estrelas";
  detCarta[5] = "♦ " + "Um monstro com um poderoso tambor de canhões, capaz de integrar os seus ataques. Ele ataca de muitas maneiras, combinando-se e separando-se de outros monstros.";
  detCarta[6] = "♦ " + "atk/1800      def/1500";
  detCarta[7] = "cartasImg/kaiba-eua/xHeadCannon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/cabecaDeCanhaoX.jpg";
  setCard();
}
document.getElementById("yomiShip").onclick=function() {
  detCarta[0] = "yomiShip";
  detCarta[1] = "Navio Yomi";
  detCarta[2] = "♦ " + "Carta de Monstro de Efeito";
  detCarta[4] = "♦ " + "Aqua/Efeito";
  detCarta[3] = "♦ " + "Nível: 3 estrelas";
  detCarta[5] = "♦ " + "Efeito: Quando este card for destruído em batalha e enviado para o Cemitério: destrua o monstro que destruiu este card.";
  detCarta[6] = "♦ " + "atk/800      def/1400";
  detCarta[7] = "cartasImg/kaiba-eua/yomiShip.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/navioYomi.jpg";
  setCard();
}
document.getElementById("burstStreamOfDestruction").onclick=function() {
  detCarta[0] = "Burst Stream of Destruction";
  detCarta[1] = "Raio Explosivo de Destruição";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Se você controlar um \"Dragão Branco de Olhos Azuis\": destrua todos os monstros que seu oponente controla. \"Dragões Brancos de Olhos Azuis\" não podem atacar no turno em que você ativar este card.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/burstStreamOfDestruction.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/raioExplosivoDeDestruicao.jpg";
  setCard();
}
document.getElementById("darkHole").onclick=function() {
  detCarta[0] = "Dark Hole";
  detCarta[1] = "Buraco Negro";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Destrua todos os monstros no campo.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/darkHole.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/buracoNegro.jpg";
  setCard();
}
document.getElementById("dragonicTactics").onclick=function() {
  detCarta[0] = "Dragonic Tactics";
  detCarta[1] = "Táticas Dragônicas";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Ofereça como Tributo 2 monstros do Tipo Dragão; Invoque por Invocação-Especial do seu Deck 1 monstro do Tipo Dragão de Nível 8.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/dragonicTactics.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/taticasDragonicas.jpg";
  setCard();
}
document.getElementById("enemyController").onclick=function() {
  detCarta[0] = "Enemy Controller";
  detCarta[1] = "Controlador de Inimigos";
  detCarta[2] = "♦ " + "Carta de Magia Rápida";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Ative 1 desses efeitos:<br> ● Escolha 1 monstro com a face para cima que seu oponente controla; mude a posição de batalha do alvo.<br>  ● Ofereça 1 monstro como Tributo e, depois, escolha 1 monstro com a face para cima que seu oponente controla; tome o controle do alvo até a Fase Final.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/enemyController.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/controladorDeInimigos.jpg";
  setCard();
}
document.getElementById("mysticalSpaceTyphoon").onclick=function() {
  detCarta[0] = "Mystical Space Typhoon";
  detCarta[1] = "Tufão Espacial Místico";
  detCarta[2] = "♦ " + "Carta de Magia Rápida";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 Card de Magia/Armadilha no campo; destrua o alvo.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/mysticalSpaceTyphoon.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/tufaoEspacialMistico.jpg";
  setCard();
}
document.getElementById("offeringsToTheDoomed").onclick=function() {
  detCarta[0] = "Offrings to the Doomed";
  detCarta[1] = "Oferendas aos Condenados";
  detCarta[2] = "♦ " + "Carta de Magia Rápida";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 monstro com a face para cima no campo; destrua o alvo e, além disso, pule sua próxima Fase de Compra.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/offeringsToTheDoomed.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/oferendasAosCondenados.jpg";
  setCard();
}
document.getElementById("rushRecklessly").onclick=function() {
  detCarta[0] = "Rush Recklessly";
  detCarta[1] = "Impulso Precipitado";
  detCarta[2] = "♦ " + "Carta de Magia Rápida";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 monstro com a face para cima no campo; ele ganha 700 de ATK até a Fase Final.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/rushRecklessly.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/impulsoPrecipitado.jpg";
  setCard();
}
document.getElementById("shardOfGreed").onclick=function() {
  detCarta[0] = "Shard of Greed";
  detCarta[1] = "Fragmento de Ganância";
  detCarta[2] = "♦ " + "Carta de Magia Contínua";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Cada vez que você compra um ou mais cards durante sua compra normal em sua Fase de Compra, coloque 1 Marcador de Ganância neste card. Você pode enviar este card com 2 ou mais Marcadores de Ganância para o Cemitério; compre 2 cards.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/shardOfGreed.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/fragmentoDeGanancia.jpg";
  setCard();
}
document.getElementById("shieldCrush").onclick=function() {
  detCarta[0] = "Shield Crush";
  detCarta[1] = "Esmagamar com o Escudo";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 monstro em Posição de Defesa no campo; destrua o alvo.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/shieldCrush.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/esmagarComOEscudo.jpg";
  setCard();
}
document.getElementById("shrink").onclick=function() {
  detCarta[0] = "Shrink";
  detCarta[1] = "Encolher";
  detCarta[2] = "♦ " + "Carta de Magia Rápida";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 monstro com a face para cima no campo; o ATK original desse monstro é diminuído pela metade até o final deste turno.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/shrink.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/encolher.jpg";
  setCard();
}
document.getElementById("silentDoom").onclick=function() {
  detCarta[0] = "Silent Doom";
  detCarta[1] = "Perdição Silenciosa";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 Monstro Normal no seu Cemitério; Invoque-o por Invocação-Especial com a face para cima em Posição de Defesa. Ele não pode atacar.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/silentDoom.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/perdicaoSilenciosa.jpg";
  setCard();
}
document.getElementById("soulExchange").onclick=function() {
  detCarta[0] = "Soul Exchange";
  detCarta[1] = "Troca de Almas";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Escolha 1 monstro que seu oponente controla; neste turno, se você oferecer um monstro como Tributo, você deve oferecer esse monstro como Tributo, como se você o controlasse. Você não pode conduzir sua Fase de Batalha no turno em que ativar este efeito.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/soulExchange.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/trocaDeAlmas.jpg";
  setCard();
}
document.getElementById("stampingDestruction").onclick=function() {
  detCarta[0] = "Stamping Destruction";
  detCarta[1] = "Destruição com os Pés";
  detCarta[2] = "♦ " + "Carta de Magia Normal";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Se você controlar um monstro do Tipo Dragão: escolha 1 Card de Magia/Armadilha no campo; destrua o alvo e, se isso acontecer, cause 500 de dano ao seu controlador.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/stampingDestruction.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/destruicaoComOsPes.jpg";
  setCard();
}
document.getElementById("tributeToTheDoomed").onclick=function() {
  detCarta[0] = "Tribute to the Doomed";
  detCarta[1] = "Tributo aos Condenados";
  detCarta[2] = "♦ " + "Carta de Magia";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Descarte 1 card e, depois, escolha 1 monstro no campo; destrua-o.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/tributeToTheDoomed.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/tributoAosCondenados.jpg";
  setCard();
}
document.getElementById("birthRight").onclick=function() {
  detCarta[0] = "Birthright";
  detCarta[1] = "Direito de Nascença";
  detCarta[2] = "♦ " + "Carta de Armadilha Contínua";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Ative este card ao escolher 1 Monstro Normal no seu Cemitério; Invoque o alvo por Invocação-Especial com a face para cima em Posição de Ataque. Quando este card deixar o campo, destrua esse monstro. Quando esse monstro deixar o campo, destrua este card.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/birthRight.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/direitoDeNascenca.jpg";
  setCard();
}
document.getElementById("damageGate").onclick=function() {
  detCarta[0] = "Damage Gate";
  detCarta[1] = "Avariar Portal";
  detCarta[2] = "♦ " + "Carta de Armadilha";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Quando você sofrer dano de batalha: escolha 1 monstro em seu Cemitério com ATK menor ou igual ao dano que você sofreu; Invoque o alvo por Invocação-Especial.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/damageGate.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/avariarPortal.jpg";
  setCard();
}
document.getElementById("sakuretsuArmor").onclick=function() {
  detCarta[0] = "Sakuretsu Armor";
  detCarta[1] = "Armadura Sakuretsu";
  detCarta[2] = "♦ " + "Carta de armadilha";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ Efeito: " + "Quando um monstro do oponente declarar um ataque: escolha o monstro atacante; destrua o alvo.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/sakuretsuArmor.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/armaduraSakuretsu.jpg";
  setCard();
}
document.getElementById("shadowSpell").onclick=function() {
  detCarta[0] = "Shadow Spell";
  detCarta[1] = "Feitiço Sombra";
  detCarta[2] = "♦ " + "Carta de Armadilha Contínua";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Ative este card ao escolher 1 monstro com a face para cima que seu oponente controla; ele perde 700 de ATK e, além disso, não pode atacar ou mudar sua posição de batalha. Quando ele deixar o campo, destrua este card.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/shadowSpell.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/feiticoSombra.jpg";
  setCard();
}
document.getElementById("threateningRoar").onclick=function() {
  detCarta[0] = "Threatening Roar";
  detCarta[1] = "Rugido Ameaçador";
  detCarta[2] = "♦ " + "Carta de Armadilha";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Seu oponente não pode declarar um ataque neste turno.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/threateningRoar.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/rugidoAmeacador.jpg";
  setCard();
}
document.getElementById("trapHole").onclick=function() {
  detCarta[0] = "Trap Hole";
  detCarta[1] = "Buraco Armadilha";
  detCarta[2] = "♦ " + "Carta de Armadilha";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Quando seu oponente Invocar por Invocação-Normal ou Virar 1 monstro com 1000 ou mais de ATK: escolha o monstro; destrua o alvo.";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/trapHole.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/buracoArmadilha.jpg";
  setCard();
}
document.getElementById("wideSpreadRuin").onclick=function() {
  detCarta[0] = "Widespread Ruin";
  detCarta[1] = "Ruína Generalizada";
  detCarta[2] = "♦ " + "Carta de Armadilha";
  detCarta[4] = "";
  detCarta[3] = "";
  detCarta[5] = "♦ " + "Efeito: Quando um monstro do oponente declarar um ataque: destrua o monstro em Posição de Ataque que seu oponente controla com o maior ATK (em caso de empate, você escolhe).";
  detCarta[6] = "";
  detCarta[7] = "cartasImg/kaiba-eua/wideSpreadRuin.jpg";
  detCarta[8] = "cartasImg/kaiba-bra/ruinaGeneralizada.jpg";
  setCard();
}
