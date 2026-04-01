# Markdown

Some example markdown snippets are given in this file.

# Figures

## Render a local file
First, copy the image file into the assets folder (you can use a subfolder for more structure). Then, define an image link using `![...](...)`.

![Markdown Logo](../docs/assets/Flag_of_Europe.svg) 


# Sections

Render sections using hashtags `#`. These can be references using internal links to jump to the right section.

Examples: 

- jump to [Figures](#figures)
- jump to [Mermaid](#mermaid-section)


# Mermaid {#mermaid-section}

See lots of examples on [the live mermaid environment](https://mermaid.live). Below are some copied examples.

## Flowchart

```mermaid
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

# References

## 