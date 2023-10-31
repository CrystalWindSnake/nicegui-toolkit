from pathlib import Path
import re
import shutil



EX_DEST_DIR_ROOT = Path(__file__).parent.parent.parent / 'niceguiToolkit/libs'

DIST_ROOT = Path(__file__).parent.parent / 'dist'


RE_import_stm = re.compile(r"""import(.+)from\s+["|']vue["|']""")


def tran_vue_imports(js_file_name_without_ex:str):
    """把vite生成的js组件文件中的 improt {getCurrentScope as kL,..} from 'vue'
    转换成
    const kL = Vue.getCurrentScope
    ...
    """

    js_file_name = f'{js_file_name_without_ex}.js'

    file = DIST_ROOT / js_file_name
    lines = file.read_text(encoding="utf8").splitlines()
    import_stm = lines[0]
    match = RE_import_stm.match(import_stm)

    if match:
        target = match.group(1).replace("{", "").replace("}", "").strip()

        each_as_stms = target.split(",")

        each_const_stms = (as_stem.split("as") for as_stem in each_as_stms)

        each_const_stms = [
            f"const {as_stem[1].strip()} = Vue.{as_stem[0].strip()}"
            for as_stem in each_const_stms
        ]

        # each_const_stms.append('const defineExpose = Vue.defineExpose')

        const_stms = "\n".join(each_const_stms) + "\n"
        # print(const_stms)

        to_file = EX_DEST_DIR_ROOT/ js_file_name

        with open(to_file, mode="w", encoding="utf8") as f:
            f.write(const_stms)
            f.write("\n".join(lines[1:]))

        print(f'create file[{str(to_file)}]')

    # print(RE_import_stm.match(import_stm))


def copy2styls(dist_file, dest_file):
    src = DIST_ROOT / dist_file
    if not src.exists():
        return
    to_file = EX_DEST_DIR_ROOT / dest_file

    shutil.copy(src, to_file)

cp_name='trackBall'
tran_vue_imports(cp_name)
copy2styls(f'{cp_name}/style.css',f'{cp_name}.css')

# for cp in ['TrackBall','Aiming','ClayBox']:
#     tran_vue_imports(cp)
#     copy2styls(f'{cp}/style.css',f'{cp}.css')


