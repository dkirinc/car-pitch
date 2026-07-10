<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use Illuminate\Support\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    private const MONTHS_GENITIVE = [
        1 => 'siječnja', 2 => 'veljače', 3 => 'ožujka', 4 => 'travnja',
        5 => 'svibnja', 6 => 'lipnja', 7 => 'srpnja', 8 => 'kolovoza',
        9 => 'rujna', 10 => 'listopada', 11 => 'studenoga', 12 => 'prosinca',
    ];

    public function index(): Response
    {
        $posts = BlogPost::with('car.brand')
            ->where('is_published', true)
            ->latest('published_at')
            ->get()
            ->map(fn (BlogPost $post) => [
                'id' => $post->id,
                'title' => $post->title,
                'slug' => $post->slug,
                'excerpt' => $post->excerpt,
                'published_at' => $this->formatDate($post->published_at),
                'cover_url' => $post->getFirstMediaUrl('cover'),
                'car' => $post->car ? [
                    'brand' => $post->car->brand ? ['name' => $post->car->brand->name] : null,
                ] : null,
            ]);

        return Inertia::render('blogs', [
            'posts' => $posts,
        ]);
    }

    private function formatDate(?Carbon $date): ?string
    {
        if (! $date) {
            return null;
        }

        return sprintf('%d. %s %d.', $date->day, self::MONTHS_GENITIVE[$date->month], $date->year);
    }
}
