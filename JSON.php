<?php

    header('content-type:application/json; charset: UTF-8');  
   
    echo json_encode(
        [
            [
                "id" => 1,
                "name" => "Star Wars",
                "content" => "Le canon qu'il a créé, c'est Star Wars. ... La série dérivée prend le nom de A Star Wars Story. Solo: A Star Wars Story, consacré à la jeunesse de Han Solo, est prévu pour 2018, et un autre est en préparation et est prévu pour 2020', il pourrait être centré sur le personnage d'Obi-Wan Kenobi."
            ],
            [
                "id" => 2,
                "name" => "Star trek",
                "content" => "Pour illustrer cette vision idéaliste, le premier pilote de la série, The Cage, a été refusé parce que le commandant en second de l'Enterprise était joué par une femme (Majel Barrett, alias l'infirmière Christine Chapel dans Star Trek puis Lwaxana Troi dans Star Trek : La Nouvelle Génération), ce que la Paramount a ..."
            ]
        ]
    );