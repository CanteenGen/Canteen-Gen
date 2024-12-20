<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Laravel\Prompts\alert;

class MenuController extends Controller
{
    //

    public function menuPage()
    {
        
        $menu = $this->takeHeaderMenu();
        return Inertia::render('AllMenuPage', ["menu" => $menu]);
    }

    public function takeDetails($header)
    {
       
        $menuDetails = Menu::find($header);
    
        if (!$menuDetails) {
            abort(404, 'Menu not found');
        }
    
        if (!$menuDetails->status) {
            return redirect()->back()->with('error', 'Menu tidak tersedia');
        }
    
        return Inertia::render('MenuDetailsPage', [
            'menu' => $menuDetails
        ]);
    }

    private function takeHeaderMenu(){
       return Menu::all();
    }
}
