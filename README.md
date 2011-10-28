# jQuery Design Proof

A helper script for proofing a design. This script will overlay an image over 
your website and after clicking a checkbox will let you fade between the site 
you're building and the design proof.

## Usage

### Method One

Add the script tag and set on a container in your page:

    <script type="text/javascript" src="/js/jquery.designproof.js"></script>
    <script type="text/javascript">
    $(function() {
        $('#container').designproof('images/proofs/proof_img.jpg');
    });
    </script>

### Method Two

Have designproof automatically create a container:

    <script type="text/javascript" src="/js/jquery.designproof.js?img=images/proofs/proof_img.jpg"></script>

## License

jquery.designproof.js is offered under an [MIT license](http://www.opensource.org/licenses/mit-license.php).

## Copyright

2011 Kyle Robinson Young, [dontkry.com](http://dontkry.com)

If you found this release useful please let the author know! Follow on [Twitter](http://twitter.com/kyletyoung)
