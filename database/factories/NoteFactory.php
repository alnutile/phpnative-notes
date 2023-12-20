<?php

namespace Database\Factories;

use App\Models\Note;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Note>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $content = <<<'EOD'
Certainly! Here's a Markdown document with fake code snippets that you can use as dummy content:

```markdown
# A Dummy Code-Driven Blog

Welcome to my dummy blog post where we'll explore some imaginary code snippets and concepts. Let's dive right in!

## The Power of Functions

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    message = f"Hello, {name}! Welcome to the world of code."
    return message

# Usage
user = "John"
print(greet(user))
```

In this fictitious Python snippet, we have a simple function `greet` that takes a `name` parameter and returns a greeting message. Imagine using this function to welcome users to your application.

## Handling Lists in JavaScript

```javascript
// Create an array of fruits
const fruits = ["apple", "banana", "cherry", "date"];

// Loop through the array
fruits.forEach((fruit, index) => {
    console.log(`Fruit`);
});

// Output
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: cherry
// Fruit 4: date
```

Here, we have a fictitious JavaScript snippet where we create an array of fruits and loop through it using `forEach`. This code showcases how you can work with arrays in JavaScript.

## Styling with CSS

```css
/* A dummy CSS stylesheet */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
}

.button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}
```

In this fictional CSS snippet, we define some basic styles for a website. It demonstrates how you can style HTML elements using CSS.

## Conclusion

This dummy blog post showcased fictitious code snippets in Python, JavaScript, and CSS. Remember, the best way to learn and improve your coding skills is by practicing and exploring real code examples. Happy coding!

Feel free to use this Markdown content as dummy text for your projects or to inspire your own articles and blog posts.
```

You can use this Markdown content as placeholder or sample text for various purposes, including testing, documentation, or design mockups.
EOD;

        return [
            'title' => fake()->sentence(5, true),
            'content' => $content,
        ];
    }

    public function configure(): static
    {
        return $this->afterMaking(function (Note $model) {
            // ...
        })->afterCreating(function (Note $model) {
            $tag1 = fake()->randomElement(['Laravel', 'Bloggable']);
            $model->attachTags([$tag1, fake()->word]);
        });
    }
}
