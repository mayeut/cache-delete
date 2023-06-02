<div align="center">
    <img src="https://buildjet.com/buildjet-for-github-actions-logo2.svg" height="38">
</div>

---

This is an action to delete a BuildJet cache entry.
Learn more about the BuildJet
Cache [here](https://buildjet.com/for-github-actions/docs/guides/migrating-to-buildjet-cache).

### Usage

To delete an entry from the BuildJet cache, you simply need to add a `.github/workflows/delete-buildjet-cache.yml` file
to your
repository with the following content:

```yaml
name: Delete BuildJet Cache
on:
  workflow_dispatch:
    inputs:
      cache_key:
        description: 'BuildJet Cache Key to Delete'
        required: true
        type: string
jobs:
  delete-buildjet-cache:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - uses: buildjet/cache-delete@v1
        with:
          cache_key: ${{ inputs.cache_key }}
```

This workflow creates a manually-run action that can be executed from the Actions tab in your repository. Once this
workflow has been added to your repository, navigate to the Actions tab, select the Delete BuildJet Cache workflow on
the sidebar, and click the Run workflow button.

You will then be prompted to input the cache key you wish to delete. After inputting this cache key, the workflow will
start, deleting the corresponding cache entry.

The cache key can be located in the logs of the workflow using the BuildJet cache. It should look like:

```text { % highlightLineBlue=1 %}
Run buildjet/cache@v3
Received 11505181 of 24752374 (46.5%), 11.0 MBs/sec
Received 24752374 of 24752374 (100.0%), 14.0 MBs/sec
Cache Size: ~24 MB (24752374 B)
/usr/bin/tar -xf /home/runner/work/_temp/f6d0f5ad-56bc-487f-a047-6b5f483e40b8/cache.tzst -P -C /home/runner/work/cache-delete/cache-delete --use-compress-program unzstd
Cache restored successfully
Cache restored from key: Linux-npm-73339479b843f24de506811a29b7519e82adab1f40d83fecff88668fa0dc47ff
```  

Simply copy the cache key(`Linux-npm-73339479b843f24de506811a29b7519e82adab1f40d83fecff88668fa0dc47ff`) from the logs and paste it into the input field when running the `Delete BuildJet Cache`
workflow.




