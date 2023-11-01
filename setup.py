#!/usr/bin/env python
"""The setup script."""
from setuptools import setup, find_packages
import niceguiToolkit


with open("README.md", encoding="utf8") as readme_file:
    readme = readme_file.read()

requirements = ["nicegui>=1.4.0", "typing_extensions"]

test_requirements = ["pytest>=3", "playwright"]

setup(
    author="carson_jia",
    author_email="568166495@qq.com",
    python_requires=">=3.8",
    classifiers=[
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Natural Language :: English",
        "Programming Language :: Python :: 3.8",
    ],
    description="toolkit for nicegui",
    entry_points={},
    install_requires=requirements,
    license="MIT license",
    # long_description=readme,
    include_package_data=True,
    keywords=["nicegui", "ex4nicegui", "webui"],
    name="niceguiToolkit",
    packages=find_packages(include=["niceguiToolkit", "niceguiToolkit.*"]),
    package_data={"": ["*.js"]},
    test_suite="__tests",
    tests_require=test_requirements,
    url="",
    version=niceguiToolkit.__version__,
    zip_safe=False,
)
