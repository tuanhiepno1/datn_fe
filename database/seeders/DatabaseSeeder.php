<?php

namespace Database\Seeders;
use App\Models\Status;
use App\Models\Account;
use App\Models\User;
use App\Models\Role;
use App\Models\Comment;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         $faker = \Faker\Factory::create();
        // User::factory()->create([
        //     'name' => 'Huy Hoàng',
        //     'email' => 'alo@gmail.com',
        //     'password' => Hash::make('1234'),
        //     'address' => 'Phường 15 Quận Tân Bình thành phố Hồ Chí Minh',
        //     'phone' => '0941280073'
        // ]);
        for ($i = 0; $i < 30; $i++) {
                Account::create([
                    'username' => $faker->userName,
                    'password' => bcrypt($faker->unique()->password),
                    'name' => $faker->name,
                    'address' => $faker->address,
                    'phone' => $faker->phoneNumber,
                    'email' => $faker->unique()->safeEmail,
                    // 'status_id' => $faker->numberBetween(1, 2), 
                    // 'role_id' => $faker->numberBetween(1, 2), 
             ]);
        }
        // for ($i = 0; $i < 10; $i++) {
        //     Status::create([
        //         'status_code' => $faker->randomNumber(), 
        //         'status_name' => $faker->word 
        //     ]);
        // } 
        // for ($i = 0; $i < 10; $i++) {
        //     Role::create([
        //         'admin' => $faker->word(), 
        //         'buyer' => $faker->word,
        //         'seller' => $faker->realText,
        //     ]);
        // } 
        // for ($i = 0; $i < 10; $i++) {
        //     Comment::create([
        //         'name' => $faker->name(), 
        //         'email' => $faker->email(), 
        //         'content' => implode(' ', $faker->words()), // Chuyển mảng thành chuỗi
        //         'content_date' => $faker->dateTimeThisYear()->format('Y-m-d'), 
        //     ]);
        // }
        
    }
}
