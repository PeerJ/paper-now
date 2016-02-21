# Paper Now

Create, edit and (optionally) display a journal article, entirely in GitHub.

In contrast to the more traditional process of `submit > peer review > publish` at [PeerJ](https://peerj.com), or even the less formal preprints at _PeerJ Preprints_ or _arXiv_, _Paper Now_ is an experiment to see where the future may go with scholarly communication. Initially, it may be that co-authors collaborate either privately or publicly on GitHub and then proceed to submitting to PeerJ or other journals for formal peer-review or preprinting. Or perhaps this is where the traditional medium of publication begins to diverge. There is no end goal other than to see what the academic community wants, which is why this is completely open to fork, extend, and build upon.

## Examples

* [Searching for anthrax in the New York City subway metagenome](https://read-lab-confederation.github.io/nyc-subway-anthrax-study/)
* [Collapse of the world's largest herbivores](http://git.macropus.org/collapse-largest-herbivores/)
* [Evidence for embodied predictive coding: the anterior insula coordinates cortical processing of tactile deviancy](http://git.macropus.org/allen-insula/)
* [Capsules of the diatom _Achnanthidium minutissimum_ arise from fibrillar precursors and foster attachment of bacteria](https://katrinleinweber.github.io/paper-now/)
* [Paper Now example article](https://peerj.github.io/paper-now/)

## Instructions

1. Clone this repository to your own account, by visiting [GitHub's importer](https://import.github.com/new/?import_url=https://github.com/peerj/paper-now/).
1. [Edit the article metadata](_data/article.yml)
1. Add [data](data) and [figures](_figures) by [uploading files to GitHub](https://help.github.com/articles/adding-a-file-to-a-repository/).
1. [Edit each section](_sections)
1. [View your article](https://peerj.github.io/paper-now/) in GitHub Pages at https://{username}.github.io/paper-now

## Notes

* Paper Now is at a very experimental stage; it may progress further if people find it useful.
* Paper Now is inspired by [Jekyll Now](https://github.com/barryclark/jekyll-now); the sidebar layout is inspired by [Lens](https://github.com/elifesciences/lens).
* If you rename your repository, you also need to change the `baseurl` setting in [_config.yml](_config.yml) to match.
* [GitHub's desktop client](https://guides.github.com/introduction/getting-your-project-on-github/#desktop) is probably the easiest way to clone a repository, add/edit files and push the changes back to GitHub.
* The article styles and scripts are in [a separate web component](https://github.com/PeerJ/research-article), so can be updated independently of the article content.

## Feedback

* Does this article structure make sense? Would it be better all in one file? [Create an issue](https://github.com/peerj/paper-now/issues) to discuss it.
* Made changes to the layout templates or some other part of the code? [Fork this repository](https://github.com/peerj/paper-now/fork), make your changes, and [send a pull request](https://github.com/peerj/paper-now/pulls).
