<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name'=>$faker->text(20),
        'price'=>$faker->numberBetween(500,1000),
        'quantity'=>$faker->numberBetween(1,10)
    ];
});
